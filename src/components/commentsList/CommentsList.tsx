import React from "react";
import { type Comment as CommentType } from "../../types";
import { useFetchCommentsQuery } from "../../store";
import { COMMENTS_LIST_TITLE } from "../../const";
import { useCheckIsCommentSelected } from "../hooks";
import Comment from "../comment/Comment";

import styles from "./CommentsList.module.css";

const sortComments = (comments: CommentType[]) =>
  [...comments].sort((a, b) => b.id - a.id);

const CommentsList = () => {
  const { data, error, isFetching } = useFetchCommentsQuery();
  const checkIsCommentSelected = useCheckIsCommentSelected();

  if (error) {
    return <div>Error</div>;
  }

  if (isFetching) {
    return <div>Loading Comments...</div>;
  }

  return (
    <>
      <h3 className={styles.title}>{COMMENTS_LIST_TITLE}</h3>
      <div className={styles.container}>
        {data &&
          sortComments(data).map(({ id, name }: CommentType) => (
            <Comment
              key={id}
              name={name}
              isSelected={checkIsCommentSelected(id)}
            />
          ))}
      </div>
    </>
  );
};

export default CommentsList;
