const expression = (
  <div>
    <h1 id="title">Title</h1>

    {articles.map(article => (
      <div key={article.uuid}>
        <h2 className="article">{article.title}</h2>
        <br />
        {article.preview}
        <br />
        <div>
          {article.author && article.author.name}
          {article.date ? <p>{article.date}</p> : '-'}
        </div>
        <button onClick={buttonFunction}>Button</button>
      </div>
    ))}
  </div>
);
