import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: "book_cover_extra_small",
  small: "book_cover_small",
  medium: "book_cover_medium",
  regular: "book_cover_regular",
  wide: "book_cover_wide",
};
interface Props {
  className?: string;
  variant?: BookCoverVariant;
  coverColor: string;
  coverImage: string;
}
const BookCover = ({
  variant = "regular",
  className,
  coverColor = "#012B48",
  coverImage = "https://placehold.co/400x600/png",
}: Props) => {

  return (
    <div
      className={cn(
        "relative transition-all duration-300 min-h-[200px] min-w-[150px]",
        variantStyles[variant],
        className
      )}
      style={{ backgroundColor: coverColor }}
    >
      {/* Book Side Svg */}
      <div
        className="absolute z-10"
        style={{ left: "12%", width: "87.5%", height: "88%" }}
      >
        {/* Output the image URL for debugging */}
        <div className="sr-only">Loading image: {coverImage}</div>

        <Image
          src={coverImage}
          alt="Book Cover"
          fill
          className="rounded-sm object-fill"
        />
      </div>
    </div>
  );
};

export default BookCover;
