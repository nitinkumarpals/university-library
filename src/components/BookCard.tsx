import Link from "next/link";
import React from "react";
import BookCover from "./BookCover";
import { cn } from "@/lib/utils";

const BookCard = ({ id, title, genre, color, cover, isLoanedBook = false }) => {
  return (
    <li className={cn(isLoanedBook && "xs:w-52 w-full")}>
      <Link href={`/books/${id}`}>
        <BookCover coverColor={color} coverImage={cover} />
      </Link>
    </li>
  );
};

export default BookCard;
