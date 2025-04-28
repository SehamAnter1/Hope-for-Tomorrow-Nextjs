"use client";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";

export default function Form_Builder({fields, schema, onSubmit}) {
    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: fields.reduce((acc, field) => {
            acc[field.name] = "";
            return acc;
        }, {}),
    });

    const renderField = (field, inputField) => {
        switch (field.type) {
            case "textarea":
                return <Textarea placeholder={field.placeholder} {...inputField} />;
            case "select":
                return (
                    <Select className={"w-full"} onValueChange={inputField.onChange} defaultValue={inputField.value}>
                        <SelectTrigger>
                            <SelectValue placeholder={field.placeholder} />
                        </SelectTrigger>
                        <SelectContent className={"w-full"}>
                            {field.options?.map((option) => (
                                <SelectItem className={"w-full"} key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                );
            default:
                return <Input type={field.type} placeholder={field.placeholder} {...inputField} />;
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {fields.map((field) => (
                    <FormField
                        key={field.name}
                        control={form.control}
                        name={field.name}
                        render={({field: inputField}) => (
                            <FormItem>
                                <FormLabel>{field.label}</FormLabel>
                                <FormControl>{renderField(field, inputField)}</FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}
                <Button type="submit" className="w-full">
                    Submit
                </Button>
            </form>
        </Form>
    );
}
