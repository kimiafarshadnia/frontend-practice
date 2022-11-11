import "./TransActionComponent.css";

const TransActionComponent = ({ transactions }) => {
  return (
    <section className="container ">
      <table>
        <tr className="tableTitle">
          <th>Title</th>
          <th>Price</th>
          <th>Date</th>
        </tr>

        {transactions.map((t) => (
          <tr
            className={`splitTransaction ${
              t.type === "expense" ? "red" : "green"
            }`}
            key={t.id}
          >
            <td>{t.desc}</td>
            <td>{t.amount}</td>
            <td>{t.date}</td>
          </tr>
        ))}
      </table>
    </section>
  );
};

export default TransActionComponent;
