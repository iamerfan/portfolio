export default async function Messages() {
  const data = await getMessages();
  return (
    <div>
      {data.map((message, i) => (
        <div key={i}>
          <h3>فرستنده : {message.email}</h3>
          <p>پیام : {message.message}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

async function getMessages() {
  const response = await fetch(process.env.URL + "/api/messages");
  return await response.json();
}
