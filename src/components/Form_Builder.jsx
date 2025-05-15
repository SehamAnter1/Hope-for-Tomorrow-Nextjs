import {useEffect, useState} from "react";
import {useForm, Controller} from "react-hook-form";
import {Dropdown} from "primereact/dropdown";
import {MultiSelect} from "primereact/multiselect";
import Textarea from "./Textarea";
import Input from "./Input";
import {Calendar} from "primereact/calendar";
import Button from "./Button";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useParams} from "next/navigation";
import {close_aye_icon, open_aye_icon} from "@/assets/icons";
// import {
//     attachment_icon,
//     clear_search_icon,
//     close_aye_icon,
//     file_icon,
//     info_icon,
//     mudted_plus_icon,
//     open_aye_icon,
//     required_icon,
// } from "../../assets/Icons";

const Form_Builder = ({
    Input_List,
    onSubmit,
    button_label,
    btn_class,
    from,
    btn_to,
    cancel_btn,
    initialValues,
    with_forget_text,
    from_settings,
    setwatchedData,
    btn_icon,
    settingsTextClickAction,
}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        control,
        formState: {errors, isValid, isDirty, dirtyFields},
        handleSubmit,
        watch,
        setValue,
        getValues,
        reset,
        setError,
    } = useForm({mode: "onChange", defaultValues: initialValues || {}});
    const router = useRouter();

    useEffect(() => {
        if (setwatchedData) {
            const subscription = watch((value) => {
                setwatchedData?.(value);
            });
            // clean up on unmount
            return () => subscription.unsubscribe();
        }
    }, [watch, setwatchedData]);
    useEffect(() => {
        reset(initialValues, {keepDirtyValues: false});
    }, []);
    const handleFormSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            const error = await onSubmit(data);
            const result = error?.response?.data;
            if (result) {
                Object.keys(result)?.forEach((field) => {
                    const fieldInList = Input_List?.find((input) => input.fieldName === field);
                    if (fieldInList) {
                        setError(field, {
                            type: "server",
                            message: result[field],
                        });
                    }
                });
            }
        } catch (error) {
            console.error("Submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };
    const [previews, setPreviews] = useState({});
    console.log("previews", previews);
    console.log(isSubmitting, "isSubmitting");
    const handleFileChange = (fieldName, e, multiple) => {
        const files = Array.from(e.target.files);

        if (files.length > 0) {
            // Retrieve current value safely
            const currentValue = getValues(fieldName) || (multiple ? [] : null);

            // Update based on `multiple`
            const newFiles = multiple ? [...currentValue, ...files] : files[0];

            setValue(fieldName, newFiles);

            setPreviews((prev) => ({
                ...prev,
                [fieldName]: multiple
                    ? newFiles.map((file) => URL.createObjectURL(file))
                    : URL.createObjectURL(newFiles), // Handle single/multiple preview
            }));
        }
    };
    const handleRemoveFile = (fieldName, index, multiple) => {
        const currentValue = getValues(fieldName) || (multiple ? [] : null); // Get the current value

        if (multiple) {
            const newFiles = currentValue.filter((_, i) => i !== index);
            setValue(fieldName, newFiles);

            setPreviews((prev) => ({
                ...prev,
                [fieldName]: newFiles.map((file) => URL.createObjectURL(file)),
            }));
        } else {
            setValue(fieldName, null);
            setPreviews((prev) => ({
                ...prev,
                [fieldName]: null,
            }));
        }
    };

    const formatDate = (date) => {
        const selectedDate = new Date(date);
        const day = String(selectedDate.getDate()).padStart(2, "0");
        const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
        const year = selectedDate.getFullYear();

        return `${year}-${month}-${day}`;
    };
    const handleDownload = (file) => {
        if (!file) {
            console.log("No file to download");
            return;
        }

        const fileUrl = file;
        window.open(fileUrl, "_blank");
    };

    const {role} = useParams();
    const [showPassword, setShowPassword] = useState({});
    const togglePassword = (id) => {
        setShowPassword((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };
    return (
        <form
            className={`grid text-on-surface-secondary gap-[20px] 2xl:gap-[40px] `}
            onSubmit={handleSubmit(handleFormSubmit)}
        >
            <div className="grid gap-[24px]">
                {Input_List?.map((item, index) => (
                    <div key={index} className="grid w-full gap-[4px]">
                        {item?.label && (
                            <div className="flex items-start gap-[4px]">
                                <label htmlFor={item?.fieldName} className={`font-bold leading-[20px]`}>
                                    {item?.label}
                                </label>
                                {item?.validator?.required && "required_icon()"}
                            </div>
                        )}
                        <div
                            className={`${
                                item?.type !== "file"
                                    ? ` flex p-[16px] bg-light-gray focus-within:outline-0    transition-all duration-300   rounded-[6px] ${
                                          item?.type !== "custom_file" && item?.type !== "textarea"
                                              ? " h-[56px]"
                                              : item?.type === "textarea"
                                              ? "h-[176px]"
                                              : " !p-0"
                                      }  gap-[8px] items-start ${
                                          item?.type !== "calendar" && item?.type !== "custom_file"
                                              ? " "
                                              : "items-center !p-0 !border-0 verflow-hidden"
                                      }  
                                      
                            ${item?.type === "phone" ? "!p-0  " : ""}
                            ${
                                item?.type === "dropdown" || item?.type === "multiSelect"
                                    ? "!items-center  overflow-hidden"
                                    : ""
                            }`
                                    : ""
                            } ${errors[item.fieldName] ? "border-1 !border-on-container-error" : ""}`}
                        >
                            {item?.icon && <span className="">{item?.icon}</span>}
                            <Controller
                                name={item.fieldName}
                                control={control}
                                // rules={item.validator}

                                rules={{
                                    validate: (value) => {
                                        if (item.fieldName === "confirm_password") {
                                            const {password} = watch();
                                            return value === password || "Passwords do not match";
                                        }
                                        return true;
                                    },
                                    ...(item.validator || {}),
                                }}
                                render={({field}) => {
                                    const {onChange, value} = field;

                                    const handleChange = (newValue) => {
                                        console.log("newValue", newValue);
                                        onChange(newValue);
                                    };
                                    return (
                                        <>
                                            {item.type === "input" && (
                                                <Input
                                                    label={item.label}
                                                    type={
                                                        item?.inputType === "password" &&
                                                        value?.trim() &&
                                                        showPassword[index]
                                                            ? "text"
                                                            : item.inputType
                                                    }
                                                    placeholder={item.placeholder}
                                                    disabled={item.disabled || isSubmitting}
                                                    inputValue={item.value || value || ""}
                                                    className="auth "
                                                    min={item.inputType === "number" ? 0 : undefined}
                                                    handleChange={handleChange}
                                                />
                                            )}
                                            {item?.inputType === "password" && (
                                                <span
                                                    className=" cursor-pointer"
                                                    role="button"
                                                    onClick={() => togglePassword(index)}
                                                >
                                                    {showPassword[index] ? open_aye_icon : close_aye_icon}
                                                </span>
                                            )}
                                            {item.type === "textarea" && (
                                                <Textarea
                                                    label={item.label}
                                                    placeholder={item.placeholder}
                                                    disabled={isSubmitting}
                                                    inputValue={value || ""}
                                                    handleChange={handleChange}
                                                    className={`auth ${
                                                        from === "profile" ? "!h-[176px] rounded-none" : ""
                                                    }`}
                                                />
                                            )}
                                            {item.type === "dropdown" && (
                                                <Dropdown
                                                    value={value || null}
                                                    options={item.options}
                                                    optionLabel={"label"}
                                                    loading={item?.loading}
                                                    onChange={(e) => handleChange(e.value)}
                                                    placeholder={item.placeholder}
                                                    disabled={isSubmitting}
                                                    className={`w-full  !p-0 bg-transparent custom_input flex-1 flex items-center ${
                                                        errors[item.fieldName] ? "p-invalid" : ""
                                                    }`}
                                                />
                                            )}
                                            {item.type === "multiSelect" && (
                                                <MultiSelect
                                                    value={Array.isArray(value) ? value : []}
                                                    options={item.options}
                                                    onChange={(e) => handleChange(e.value)}
                                                    loading={item?.loading}
                                                    placeholder={item.placeholder}
                                                    disabled={isSubmitting}
                                                    className={`w-full bg-transparent  custom_input flex-1 flex items-center ${
                                                        errors[item.fieldName] ? "p-invalid" : ""
                                                    }`}
                                                />
                                            )}
                                            {item.type === "calendar" && (
                                                <Calendar
                                                    value={value ? new Date(value) : null}
                                                    placeholder={item.placeholder}
                                                    disabled={isSubmitting}
                                                    className={`w- auth relative !w-[100px] overflow-hidden bg-transparent custom_input h-[57px] justify-center flex-1 flex items-center ${
                                                        errors[item.fieldName] ? "p-invalid" : ""
                                                    }`}
                                                    onChange={(e) => {
                                                        const formattedDate = formatDate(e.value);
                                                        handleChange(formattedDate);
                                                    }}
                                                    // showIcon
                                                    dateFormat="mm/dd/yy"
                                                />
                                            )}
                                            {/* {item.type === "phone" && (
                                                <PhoneInput
                                                    country={"us"}
                                                    value={value || "+966"}
                                                    onChange={handleChange}
                                                    inputClass={`w-full  h-full custom_input  bg-transparent ${
                                                        errors[item.fieldName] ? "input-error" : ""
                                                    }`}
                                                    disabled={isSubmitting}
                                                />
                                            )} */}

                                            {item.type === "file" && (
                                                <div className="picture  cursor-pointer flex items-center justify-center rounded-[6px] w-full h-[445px] mx-auto overflow-hidden relative">
                                                    {previews[item.fieldName] ? (
                                                        <img
                                                            src={previews[item.fieldName]}
                                                            className="w-full h-full object-contain"
                                                            alt="cover image"
                                                        />
                                                    ) : (
                                                        <img
                                                            src={value ? value : add_request_img}
                                                            className={` ${
                                                                value
                                                                    ? "w-full h-full object-contain"
                                                                    : "w-[335px] h-[319px]"
                                                            }  `}
                                                            alt="cover image"
                                                        />
                                                    )}
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        className="opacity-0 absolute top-0 start-0 w-full h-full mx-auto cursor-pointer"
                                                        onChange={(e) => handleFileChange(item.fieldName, e)}
                                                        disabled={isSubmitting}
                                                    />
                                                </div>
                                            )}

                                            {item.type === "custom_file" && (
                                                <div className="w-full  gap-[8px] grid">
                                                    <div
                                                        className="flex-1 h-[56px]
  justify-center items-center flex relative  rounded-[6px] "
                                                    >
                                                        <input
                                                            type="file"
                                                            className="opacity-0  rounded-[6px] absolute top-0 start-0 w-full h-full mx-auto cursor-pointer"
                                                            accept="image/*,.pdf,.doc,.docx"
                                                            id={item.fieldName}
                                                            onChange={(e) =>
                                                                handleFileChange(item.fieldName, e, item.multiple)
                                                            }
                                                            disabled={isSubmitting}
                                                            multiple={item.multiple}
                                                        />
                                                        <div className="m-auto flex items-center gap-2">
                                                            {"attachment_icon"}

                                                            <span className=" body__large text-on-surface-secondary">
                                                                {"attachments"}
                                                            </span>
                                                        </div>
                                                        {/* <label
                                                                htmlFor={item.fieldName}
                                                                className="cursor-pointer w-full flex items-center justify-between bg-gray-200 px-3 py-2 rounded"
                                                            >
                                                                <span>{t(item.placeholder) || "Select files"}</span>
                                                                <span>{file_icon}</span>
                                                            </label> */}
                                                    </div>

                                                    {value && (
                                                        <div className=" items-center gap-2  flex flex-wrap">
                                                            {(Array.isArray(value) ? value : [value])?.map(
                                                                (file, index) => (
                                                                    <div
                                                                        key={index}
                                                                        className="h-[40px] hover:!bg-transparent card__layout rounded-[20px] flex items-center gap-[18px] p-[8px_12px] flex-nowrap"
                                                                    >
                                                                        <span className="truncate text-nowrap">
                                                                            {file.name}
                                                                        </span>
                                                                        <button
                                                                            type="button"
                                                                            onClick={() =>
                                                                                handleRemoveFile(
                                                                                    item.fieldName,
                                                                                    index,
                                                                                    item.multiple
                                                                                )
                                                                            }
                                                                        >
                                                                            {"clear_search_icon"}
                                                                        </button>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </>
                                    );
                                }}
                            />
                        </div>

                        {errors[item.fieldName] && (
                            <p
                                className={`flex px-[16px] text-start items-start gap-[4px] text-on-container-error label__large relative ${
                                    item?.type === "file" ? "mx-auto" : ""
                                } `}
                            >
                                {errors[item.fieldName]?.message}
                            </p>
                        )}
                    </div>
                ))}
            </div>
            {with_forget_text && (
                <Link className="text-end text-on-surface-secondary body__medium " href={`/auth/forget-password`}>
                    {"forget_password"}
                </Link>
            )}
            {from_settings && (
                <Link className="text-container-primary body__xlarg" href={`/settings/change-password`}>
                    {"change_password"}
                </Link>
            )}
            {/* {from_settings && (
                <Button
                    type={"button"}
                    variant="text"
                    onClick={settingsTextClickAction}
                    text={"change_password"}
                    className="text-container-primary body__xlarg"
                ></Button>
            )} */}
            <div className={`flex ${from === "profile" ? "mx-auto" : ""} items-center gap-[16px] `}>
                {cancel_btn && (
                    <Button
                        type="button"
                        onClick={() => router.back()}
                        // to={`/user/${role}/profile`}
                        text={"Previous"}
                        className={`w-full  ${from !== "profile" ? "!rounded-[14px]" : ""}  ${btn_class}`}
                        disabled={isSubmitting}
                    ></Button>
                )}
                <Button
                    type={isDirty ? "submit" : "button"}
                    loading={isSubmitting}
                    href={isDirty ? "" : btn_to}
                    text={button_label}
                    icon_first
                    className={`w-full flex-1   ${btn_class} `}
                    disabled={!isValid || isSubmitting}
                    variant={!isValid || isSubmitting ? "disabled" : "primary"}
                >
                    {/* {"btn_icon" && (!isValid || isSubmitting) ? "mudted_plus_icon" : "btn_icon"} */}
                </Button>
            </div>
        </form>
    );
};

export default Form_Builder;
