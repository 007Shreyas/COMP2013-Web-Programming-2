export default function PostForm({ newPost, handleInputChange, handleSubmit }) {
  return (

<div className="Card">

    <form onSubmit={handleSubmit}>
      <h2>Post Form</h2>

      <label>
        Title:
        <input
          name="title"
          value={newPost.title}
          onChange={handleInputChange}
        />
      </label>

      <br />

      <label>
        Body:
        <input
          name="body"
          value={newPost.body}
          onChange={handleInputChange}
        />
      </label>

      <br />

      <button type="submit">Submit</button>
    </form>
    
</div>

  );
}
