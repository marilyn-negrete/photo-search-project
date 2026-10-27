import { render, screen } from "@testing-library/react";
import PostItem from "../PostItem";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    const { priority, placeholder, blurDataURL, ...imageProps } = props;
    return <img {...imageProps} />;
  },
}));

describe("PostItem", () => {
  const postProps = {
    id: "post-1",
    description: "Mountain landscape",
    created_at: "2026-10-20T12:00:00Z",
    alt_description: "Mountains covered in snow",
    blur_hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    urls: {
      raw: "https://images.unsplash.com/photo-123?",
    },
    user: {
      username: "photographer",
      first_name: "Jane",
      last_name: "Doe",
      location: "Mexico",
      profile_image: {
        medium: "https://example.com/profile.jpg",
      },
    },
  };

  test("renders image with correct src and alt text", () => {
    render(<PostItem post={postProps} />);
    const imgElement = screen.getByAltText(postProps.alt_description);

    expect(imgElement).toHaveAttribute(
      "src",
      expect.stringContaining(postProps.urls.raw),
    );
    expect(imgElement).toHaveAttribute(
      "alt",
      expect.stringContaining(postProps.alt_description),
    );
  });

  test("renders the post description", () => {
    render(<PostItem post={postProps} />);

    expect(screen.getByText("Mountain landscape")).toBeInTheDocument();
  });

  test("renders the photographer photo and name", () => {
    render(<PostItem post={postProps} />);

    expect(screen.getByAltText("user-photo")).toBeInTheDocument();
    expect(
      screen.getByText(
        `${postProps.user.first_name} ${postProps.user.last_name}`,
      ),
    ).toBeInTheDocument();
  });
});
