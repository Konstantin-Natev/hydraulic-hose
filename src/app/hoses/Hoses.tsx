"use client";
import { Autocomplete, Box, Divider, Grid, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material"
import styles from "./hoses.module.scss";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { defaultFilters, IHoseDetails } from "@/interfaces/hoses/hoses";
import searchOutline from "../../../public/searchOutline.svg";
import cross from "../../../public/cross.svg";
import plus from "../../../public/plus.svg";
import { useRouter } from "next/navigation";
import { CustomButton } from "../../ui/CustomButton/CustomButton";
import { AddHoseModal } from "./AddHoseModal";
import { HosesTableRow } from "./HosesTableRow";

interface HosesProps {
    hoses: IHoseDetails[]
}

export const Hoses = ({ hoses } : HosesProps) => {
    const [filters, setFilters] = useState({ ...defaultFilters });
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const router = useRouter();

    const handleClearFilters = () => {
        setFilters({ ...defaultFilters });
        router.push("?");
    };

    const openAddHoseModal = () => {
        setIsOpen(true);
    };

    const closeAddHoseModal = () => {
        setIsOpen(false);
    };

    return (
        <Stack className={styles.rootContainer}>
            <Grid className={styles.titleSection}>
                <Typography className={styles.pageTitle}>Маркучи</Typography>
                <CustomButton
                    text={"Добави маркуч"}
                    variant={"filled"}
                    icon={plus}
                    onClick={openAddHoseModal}
                />
            </Grid>
            <Typography className={styles.pageSubtitle}>
                Списък с маркучите въведени в системата и техния статус
            </Typography>
            <Divider className={styles.divider} />
            <Stack className={styles.filtersSection}>
                <Stack>
                    <Stack className={styles.filters}>
                        <TextField
                            id="outlined-search"
                            placeholder={"Търсете по наимонование на маркуч"}
                            type="search"
                            className={styles.searchField}
                            InputProps={{
                                className: styles.customInput,
                                startAdornment: <Image src={searchOutline} alt={"search outlined"} />
                            }}
                            InputLabelProps={{ className: styles.customInputLabel }}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setFilters({ ...filters, hose_name: e.target.value})}
                            value={filters.hose_name}
                        />
                        <Autocomplete
                            disablePortal
                            id="status-autocomplete"
                            options={[]}
                            className={styles.status}
                            renderInput={(params) => (
                                <TextField
                                {...params}
                                label="Статус"
                                InputLabelProps={{ className: styles.customInputLabel }}
                                InputProps={{
                                    ...params.InputProps,
                                    className: styles.customInput
                                }}
                                />
                            )}
                            value={filters.status}
                            onChange={(event, value) => {
                                setFilters({ ...filters, status: value ?? "" });
                            }}
                        />
                    </Stack>
                </Stack>
                <Stack className={styles.filterButtonsInner}>
                    {(filters.hose_name !== "" ||
                    filters.status !== "" ||
                    filters.count !== "" 
                        ) && (
                        <CustomButton
                            onClick={handleClearFilters}
                            className={styles.clearButton}
                            text={"Изчисти"}
                            icon={cross}
                            variant={"text"}
                        />
                    )}
                </Stack>
            </Stack>
            <Box className={styles.card}>
                <Table>
                    <TableHead>
                        <TableRow className={styles.tableHeader}>
                            <TableCell>Модел</TableCell>
                            <TableCell>Размер</TableCell>
                            <TableCell>Вътрешен диаметър DN</TableCell>
                            <TableCell>Работно налягане</TableCell>
                            <TableCell>Идваща цена</TableCell>
                            <TableCell>Продаваша цена</TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {hoses?.map((hose) => (
                            <HosesTableRow key={hose.id} hose={hose} />
                        ))}
                    </TableBody>
                </Table>
            </Box>
            {isOpen && (
                <AddHoseModal
                    isOpen={isOpen}
                    onClose={closeAddHoseModal}
                />
            )}
        </Stack>
    )
}