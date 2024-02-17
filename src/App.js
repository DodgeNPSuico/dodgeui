import { useEffect, useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const apiUrl = "http://localhost:1234";

    const endpoint = `${apiUrl}/api/expenses`;

    const response = await fetch(endpoint);

    const expenseData = await response.json();

    setExpenses(expenseData);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div>
      <form>
        <textarea cols="30" rows="10"></textarea>
        <input type="number" />
        <input type="date" />
        <button>Save</button>
      </form>

      <h2>My Expenses</h2>

      <table width="100%">
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody></tbody>
      </table>
    </div>
  );
}

export default App;
