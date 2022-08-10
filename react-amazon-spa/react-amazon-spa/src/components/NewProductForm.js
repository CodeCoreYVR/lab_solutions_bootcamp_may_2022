const NewProductForm = (props) => {
  const getDataAndSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    console.log(fd.get("title"), fd.get("description"), fd.get("price"));
    props.submitForm({
      title: fd.get("title"),
      description: fd.get("description"),
      price: fd.get("price"),
      created_at: new Date(),
      id: 6,
    });

    event.currentTarget.reset();
  };

  return (
    <form onSubmit={getDataAndSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" name="title" id="" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <br />
        <input type="text" name="description" id="" />
      </div>{" "}
      <div>
        <label htmlFor="price">Price</label>
        <br />
        <input type="text" name="price" id="" />
      </div>
      <div>
        <input type="submit" value="Create Product" />
      </div>
    </form>
  );
};

export default NewProductForm;