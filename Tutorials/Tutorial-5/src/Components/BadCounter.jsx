//NOTE: This is a bad way to implement a counter in React.
//This is because the count variable is not stored in the state of the component.
//This means that the component will not re-render when the count variable is updated.
//This is why the count variable is not displayed in the UI when it is updated.
//This is why we should always use the state of the component to store the data that needs to be displayed in the UI.
export default function BadCounter() {
  let count = 0;
  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          count++;
          console.log(count);
        }}
      >
        plus
      </button>
      <button
        onClick={() => {
          count--;
          console.log(count);
        }}
      >
        minus
      </button>
    </>
  );
}