import Link from "next/link";
import React from "react";

function CommentCard({ data }) {
  return (
    <div className="comment_card">
      <Link href={"/"}>
        <a className="avatar">
          <img src={data.picUrl} alt="" />
        </a>
      </Link>
      <div>
        <h6>{data.title}</h6>
        <a className="email" href="mail:">
          {data.email}
        </a>
        <p>{data.desc}</p>
      </div>
    </div>
  );
}

export default CommentCard;
