import { TableCell, TableRow } from "@mui/material"
import styles from "./hose-fittings-table-row.module.scss";
import { IHoseFittingsDetails } from "@/interfaces/hoses/fittings";

interface HosesTableRowProps {
    hose_fittings: IHoseFittingsDetails
}

export const HoseFittingsTableRow = ({ hose_fittings }: HosesTableRowProps) => {
    return (
        <TableRow
            key={hose_fittings.id}
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
            <TableCell className={styles.id}>{hose_fittings.fittings_for_model_hose}</TableCell>
            <TableCell className={styles.id}>{hose_fittings.fittings_size}</TableCell>
            <TableCell className={styles.id}>{hose_fittings.DN_diameter}</TableCell>
            <TableCell className={styles.id}>{hose_fittings.count_of_fittings}</TableCell>
            <TableCell className={styles.id}>{hose_fittings.initial_price}</TableCell>
            <TableCell className={styles.id}>{hose_fittings.market_price}</TableCell>
            <TableCell className={styles.id}>Детайли бутон</TableCell>
        </TableRow>
    )
}