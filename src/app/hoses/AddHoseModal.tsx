"use client";
import Button from "@mui/material/Button";
import Image from "next/image";
import { Grid, Modal, TextField, Typography } from "@mui/material";
import styles from "./add-hose-modal.module.scss";
import * as yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { CustomTextInput } from "@/ui/CustomTextInput/CustomeInputField";
import { addHoseRecord } from "@/app/hoses/action";

interface AddHoseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const validationSchema = yup.object({
  model: yup.string().required("Полето е задължително"),
  DN_diameter: yup.string().required("Полето е задължително"),
  initial_price: yup.number().required("Полето е задължително").min(0.01, "Идващата цена трябва да е минимално 1лв"),
  market_price: yup.number().required("Полето е задължително").min(0.01, "Цена на продаване трябва да е минимално 1лв"),
});

export const AddHoseModal = ({ isOpen, onClose }: AddHoseModalProps) => {
  const router = useRouter();
  const formikHose = useFormik({
    initialValues: {
      model: "",
      hose_size: "",
      DN_diameter: 0,
      initial_price: 0,
      market_price: 0,
      working_pressure: 0,
    },
    validateOnMount: true,
    validationSchema: validationSchema,
    onSubmit: () => {
      handleSubmit();
    },
    validateOnChange: true,
    enableReinitialize: true
  });

  const handleSubmit = async () => {
    try {
      if (formikHose.isValid) {
        await addHoseRecord(formikHose.values);
        onClose();
        formikHose.resetForm();
      }
    } catch (error) {
      console.error("Error submitting hose record:", error);
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose} className={styles.modal}>
      <Grid className={styles.modalContainer}>
        <Grid className={styles.closeImage} onClick={onClose}>
          <Image src="/cross.svg" alt="Cancel" width={20} height={20} />
        </Grid>
        <Typography className={styles.modalTitle}>Добавяне на Маркуч</Typography>
        <form onSubmit={formikHose.handleSubmit}>
          <Grid container justifyContent={"space-between"} className={styles.modalInnerContainer}>
            <Grid item width={"48%"}>
              <CustomTextInput
                label="Модел *"
                labelStyle={styles.modalLabel}
                fieldStyle={styles.modalTextField}
                value={formikHose.values.model}
                onChange={(e) => {
                  formikHose.handleChange(e);
                }}
                error={
                  formikHose.validateOnChange &&
                  formikHose.touched.model &&
                  Boolean(formikHose.errors.model)
                }
                helperText={
                  formikHose.validateOnChange &&
                  formikHose.touched.model &&
                  formikHose.errors.model
                }
                name={"model"}
                placeholder={"Въведете модел"}
                type={"text"}
              />
              <CustomTextInput
                label="Размер"
                labelStyle={styles.modalLabel}
                fieldStyle={styles.modalTextField}
                value={formikHose.values.hose_size}
                onChange={(e) => {
                  formikHose.handleChange(e);
                }}
                error={
                  formikHose.validateOnChange &&
                  formikHose.touched.hose_size &&
                  Boolean(formikHose.errors.hose_size)
                }
                helperText={
                  formikHose.validateOnChange &&
                  formikHose.touched.hose_size &&
                  formikHose.errors.hose_size
                }
                name={"hose_size"}
                placeholder={"Въведете размер"}
                type={"text"}
              />
              <CustomTextInput
                label="Вътрешен диаметър DN *"
                labelStyle={styles.modalLabel}
                fieldStyle={styles.modalTextField}
                value={formikHose.values.DN_diameter}
                onChange={(e) => {
                  formikHose.handleChange(e);
                }}
                error={
                  formikHose.validateOnChange &&
                  formikHose.touched.DN_diameter &&
                  Boolean(formikHose.errors.DN_diameter)
                }
                helperText={
                  formikHose.validateOnChange &&
                  formikHose.touched.DN_diameter &&
                  formikHose.errors.DN_diameter
                }
                name={"DN_diameter"}
                placeholder={"Въведете вътрешен диаметър DN"}
                type={"text"}
              />
            </Grid>
            <Grid item width={"48%"}>
              <CustomTextInput
                label="Работно налягане"
                labelStyle={styles.modalLabel}
                fieldStyle={styles.modalTextField}
                value={formikHose.values.working_pressure}
                onChange={(e) => {
                  formikHose.handleChange(e);
                }}
                error={
                  formikHose.validateOnChange &&
                  formikHose.touched.working_pressure &&
                  Boolean(formikHose.errors.working_pressure)
                }
                helperText={
                  formikHose.validateOnChange &&
                  formikHose.touched.working_pressure &&
                  formikHose.errors.working_pressure
                }
                name={"working_pressure"}
                placeholder={"Въведете работно налягане"}
                type={"text"}
              />
              <CustomTextInput
                label="Идваща цена *"
                labelStyle={styles.modalLabel}
                fieldStyle={styles.modalTextField}
                value={formikHose.values.initial_price}
                onChange={(e) => {
                  formikHose.handleChange(e);
                }}
                error={
                  formikHose.validateOnChange &&
                  formikHose.touched.initial_price &&
                  Boolean(formikHose.errors.initial_price)
                }
                helperText={
                  formikHose.validateOnChange &&
                  formikHose.touched.initial_price &&
                  formikHose.errors.initial_price
                }
                name={"initial_price"}
                placeholder={"Въведете идваща цена"}
                type={"text"}
              />
              <CustomTextInput
                label="Продаваша цена *"
                labelStyle={styles.modalLabel}
                fieldStyle={styles.modalTextField}
                value={formikHose.values.market_price}
                onChange={(e) => {
                  formikHose.handleChange(e);
                }}
                error={
                  formikHose.validateOnChange &&
                  formikHose.touched.market_price &&
                  Boolean(formikHose.errors.market_price)
                }
                helperText={
                  formikHose.validateOnChange &&
                  formikHose.touched.market_price &&
                  formikHose.errors.market_price
                }
                name={"market_price"}
                placeholder={"Въведете продаваша цена"}
                type={"text"}
              />
            </Grid>
          </Grid>
          <Grid className={styles.modalButtonSection}>
            <Button className={styles.closeButton} onClick={onClose}>
              Откажи
            </Button>
            <Button type="submit" className={styles.addButton}>
              Добави
            </Button>
          </Grid>
        </form>
      </Grid>
    </Modal>
  );
};
