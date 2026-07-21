import React from "react";
import { useForm } from "react-hook-form";
import createBlogApi from "../../RequiredApi/CreateBlog";
import Input from "../RTEComponents/Input";
import Select from "../RTEComponents/Select";
import Button from "../RTEComponents/Button";
import RTE from "../RTEComponents/RTE";

export default function CreateBlog() {
    const {
        register,
        handleSubmit,
        control,
        getValues,
    } = useForm({
        defaultValues: {
            title: "",
            content: "",
            status: "draft",
        },
    });

    const submit = async (data) => {
        try {
            const response = await createBlogApi.createBlog(data);

            console.log("Blog Created Successfully");
            console.log(response);

            // Later:
            // navigate(`/blog/${response.data._id}`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto p-6">
            <form
                onSubmit={handleSubmit(submit)}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
                {/* Left Section */}
                <div className="lg:col-span-2 space-y-6">
                    <Input
                        label="Title"
                        placeholder="Enter blog title..."
                        {...register("title", {
                            required: true,
                        })}
                    />

                    <RTE
                        label="Content"
                        name="content"
                        control={control}
                        defaultValue={getValues("content")}
                    />
                </div>

                {/* Right Section */}
                <div className="space-y-6">
                    {/* <Input
                        label="Featured Image"
                        type="file"
                        accept="image/*"
                        {...register("featuredImage", {
                            required: true,
                        })}
                    /> */}

                    <Select
                        label="Status"
                        options={["draft", "published"]}
                        {...register("status", {
                            required: true,
                        })}
                    />

                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Publish Blog
                    </Button>
                </div>
            </form>
        </div>
    );
}