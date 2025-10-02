const handleOnSubmit = (e) => {
  //to avoid refreshing the page
  e.preventDefault();
  console.log("Form is submitted");
};

export default function EmptyForm() {
  return (
    <form action="" onSubmit={handleOnSubmit}>
      <input type="submit" name="" id="" />
    </form>
  );
}