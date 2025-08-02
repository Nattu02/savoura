const Contact = () => {
  return (
    <div className="flex flex-col items-center py-10 font-bold text-3xl">
      <h2>This is the contact page</h2>
      <form className="flex flex-col border-2 border-gray-300 items-center w-fit mx-auto my-10 p-5">
        <input
          type="text"
          placeholder="Name"
          className="m-4 p-4 border-2 border-gray-300 rounded-lg font-bold text-lg"
        ></input>
        <input
          type="text"
          placeholder="Message"
          className="m-4 p-4 border-2 border-gray-300 rounded-lg font-bold text-lg"
        ></input>
        <button className="m-4 p-2 border-2 border-gray-300 rounded-lg font-black text-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
