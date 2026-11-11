import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../About";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    const { priority, placeholder, blurDataURL, ...imageProps } = props;
    return <img {...imageProps} />;
  },
}));

let userProfileProps = {
    username: "jdoe",
    first_name: "Jane",
    last_name: "Doe",
    location: "Mexico",
    bio: 'Jane Doe is a Web UI developer from Mexico who enjoys photography and travel',
    profile_image: "https://example.com/profile.jpg"
  };

describe("About", () => {
  test("User's profile picture renders without crashing", () => {
    render(<About userProfile={userProfileProps} />);
    const profileImage = screen.getByAltText("user-profile-picture");
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute(
      "src",
      expect.stringContaining("https://example.com/profile.jpg"),
    );
  });

  test("no/thumb.png image renders when not user profile image is provided", () => {
    render(<About userProfile={''} />);
    const profileImage = screen.getByAltText("user-profile-picture");
    expect(profileImage).toHaveAttribute("src", expect.stringContaining("/no-thumb.png"));
  });

  test("User bio renders correctly", () => {
    render(<About userProfile={userProfileProps} />);
    const fullName = screen.getByText(`${userProfileProps.first_name} ${userProfileProps.last_name}`);
    const username = screen.getByText(/@jdoe/i);
    const bio = screen.getByText(userProfileProps.bio);

    expect(fullName).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(bio).toBeInTheDocument();
  });
});
