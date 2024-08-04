import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

const comments = [
    1,
    2
  ]

// Forma convencional de se escrever >>> export function Post(props) {
// Formula com desestruturação das Props (trazer dentro de cochetes apenas o que deseja usar das props para não quer ficar escrevendo props.)
export function Post({ author, publishedAt, content, id }) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBr,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar className={styles.avatar} src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "h1") {
            return <h1 key={id}>{line.content}</h1>;
          } else if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              // eslint-disable-next-line react/jsx-key
              <p>
                <a target="_blank" href={line.content}>
                  Criador
                </a>
              </p>
            );
          }
        })}
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu comentario</strong>
        <textarea placeholder="Deixe um comentario" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment)=>{
            return <Comment />
        })}
      </div>
    </article>
  );
}
