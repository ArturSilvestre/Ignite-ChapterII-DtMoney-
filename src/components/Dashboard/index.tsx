import { TransactionsTable } from "../../TransactionsTable";
import { Summary } from "../Summary";
import { Conatiner } from "./styles";

export function Dashboard() {
  return (
    <Conatiner>
      <Summary />
      <TransactionsTable />
    </Conatiner>
  );
}