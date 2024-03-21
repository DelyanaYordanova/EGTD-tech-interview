import React, { memo } from "react";
import { COMMENT_LABEL } from "../../const";

import styles from "./Comment.module.css";

type CommentProps = { name: string; isSelected: boolean };

const Comment = memo(({ name, isSelected }: CommentProps) => {
  const className = `${styles.comment} ${isSelected ? styles.selected : ""}`;

  return <div className={className}>{`${COMMENT_LABEL}: ${name}`}</div>;
});

export default Comment;
