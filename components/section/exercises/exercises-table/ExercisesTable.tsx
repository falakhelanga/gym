import { cn } from "../../../../utils/utils";
import Tbody from "../../../elements/table/Tbody";
import Td from "../../../elements/table/Td";
import Th from "../../../elements/table/Th";
import Thead from "../../../elements/table/Thead";
import Tr from "../../../elements/table/Tr";
import { formatDistance } from "date-fns";

import { makeData, Excercise } from "./makeData";

interface ExercisesTableProps {
  className?: string;
}

const ExercisesTable = ({ className }: ExercisesTableProps) => {
  return (
    <div className="relative overflow-clip h-full w-full flex flex-col">
      <table className={cn("overflow-x-scroll w-full table-fixed", className)}>
        <Thead className="sticky top-0">
          <Th>Exercises (2059)</Th>
          <Th isSortable={true}>Modality</Th>
          <Th isSortable={true}>Muscle Group</Th>
          <Th isSortable>Movement pattern</Th>
          <Th isSortable>Category</Th>
          <Th isSortable>Last updated</Th>
        </Thead>
      </table>
      <div className="flex-1 overflow-y-auto -mt-8">
        <table className={cn(" w-full table-fixed", className)}>
          <Tbody className="overflow-auto">
            {makeData(100).map((row: Excercise, idx) => (
              <Tr key={idx}>
                <Td>{row.name}</Td>
                <Td>{row.modality}</Td>
                <Td>{row.muscle_group}</Td>
                <Td>{row.movement_pattern}</Td>
                <Td>{row.category}</Td>
                <Td>
                  {formatDistance(new Date(row.date_uploaded), new Date())}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </table>
      </div>
    </div>
  );
};

export default ExercisesTable;
