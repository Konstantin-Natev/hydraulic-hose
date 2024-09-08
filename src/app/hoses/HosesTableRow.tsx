import { IHoseDetails } from "@/interfaces/hoses/hoses"
import { TableCell, TableRow } from "@mui/material"
import styles from "./hoses-table-row.module.scss";

interface HosesTableRowProps {
    hose: IHoseDetails
}

export const HosesTableRow = ({ hose }: HosesTableRowProps) => {
    return (
        <TableRow
            key={hose.id}
            className={styles.row}
            sx={{
                "&:last-child td, &:last-child th": {
                border: 0
                },
                " &:first-of-type td, &:first-of-type th": {
                borderTop: 0
                }
            }}
        >
            <TableCell className={styles.id}>{hose.model}</TableCell>
            <TableCell className={styles.id}>{hose.hose_size}</TableCell>
            <TableCell className={styles.id}>{hose.DN_diameter}</TableCell>
            <TableCell className={styles.id}>{hose.working_pressure}</TableCell>
            <TableCell className={styles.id}>{hose.initial_price}</TableCell>
            <TableCell className={styles.id}>{hose.market_price}</TableCell>
            <TableCell className={styles.id}>Детайли бутон</TableCell>
        </TableRow>
    )
}