import { renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "@/hooks/useFetch";
import { getJWToken } from "../../lib/helpers";

jest.mock("../../lib/helpers", () => ({
  getJWToken: jest.fn(),
}));

describe("useFetch", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();

    getJWToken.mockReturnValue("test-token");
    global.fetch = jest.fn();
  });

  const url = "https://api.example.com/photos";
  const label = "photos";

  test("fetches and returns data successfully", async () => {
    const mockData = [
      {
        id: "1",
        description: "Mountain landscape",
        created_at: "2026-10-20T12:00:00Z",
        alt_description: "Mountains covered in snow",
        blur_hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
        urls: {
          raw: "https://images.unsplash.com/photo-123?",
        },
      },
      {
        id: "2",
        description: "Beach landscape",
        created_at: "2026-10-20T12:00:00Z",
        alt_description: "White sand beach",
        blur_hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
        urls: {
          raw: "https://images.unsplash.com/photo-1234?",
        },
      },
    ];

    fetch.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockData),
    });

    const { result } = renderHook(() => useFetch(url, label));

    expect(result.current[2]).toBe(true);
    await waitFor(() => {
      expect(result.current[0]).toEqual(mockData);
      expect(result.current[1]).toBe("");
    });
    expect(fetch).toHaveBeenCalledWith(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "test-token",
      },
    });
    expect(localStorage.getItem(label)).toBe(JSON.stringify(mockData));
    expect(result.current[2]).toBe(false);
  });
  
  test("returns and error if request fails", async () => {
    const mockData = [];
    const mockError = new Error('Unsplash API - Request failed');

    fetch.mockRejectedValue(mockError);

    const { result } = renderHook(() => useFetch('/fail', label));

    expect(result.current[2]).toBe(true);
    await waitFor(() => { 
        expect(result.current[0]).toEqual(mockData);
        expect(result.current[1]).toBe(mockError);
    });
    expect(result.current[2]).toBe(false);
  });
});
