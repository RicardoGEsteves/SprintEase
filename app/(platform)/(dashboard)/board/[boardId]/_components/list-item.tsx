"use client";

import { ElementRef, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { TListWithCards } from "@/types";

import { ListHeader } from "./list-header";

interface ListItemProps {
  data: TListWithCards;
  index: number;
}

export const ListItem = ({ data, index }: ListItemProps) => {
  const textareaRef = useRef<ElementRef<"textarea">>(null);

  const [isEditing, setIsEditing] = useState(false);

  const disableEditing = () => {
    setIsEditing(false);
  };

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      textareaRef.current?.focus();
    });
  };

  return <div>list item</div>;
};
