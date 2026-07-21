import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({
    name,
    control,
    label,
    defaultValue = "",
    
}) {
    return (
        <div className="w-full">
            {label && (
                <label className="inline-block mb-2 pl-1 font-medium">
                    {label}
                </label>
            )}
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                render={({ field: { onChange, value } }) => (
                    <Editor
                        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
                        value={value}
                        onEditorChange={onChange}
                        init={{
                            height: 500,

                            menubar: true,

                            plugins: [
                                    "lists",
                                    "link",
                                    "table",
                                    "code",
                                    "codesample",
                                    "searchreplace",
                                    "wordcount",
                                ],
                            toolbar:
                                "undo redo | blocks | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | codesample | removeformat",

                            content_style:
                                "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
                        }}
                    />
                )}
            />
        </div>
    );
}