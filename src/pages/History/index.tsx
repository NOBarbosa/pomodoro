import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <tr>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Inicío</th>
            <th>Status</th>
          </tr>

          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>30 minutos</td>
              <td>há 2 meses</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>30 minutos</td>
              <td>há 2 meses</td>
              <td>
                <Status statusColor="green"> Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>30 minutos</td>
              <td>há 2 meses</td>
              <td>
                <Status statusColor="green"> Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>30 minutos</td>
              <td>há 2 meses</td>
              <td>
                <Status statusColor="yellow"> Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>30 minutos</td>
              <td>há 2 meses</td>
              <td>
                <Status statusColor="red"> Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
