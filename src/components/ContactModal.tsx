import { motion } from "framer-motion";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRef } from "react";
import { IoClose } from "react-icons/io5";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

interface ContactModalProps {
    onClose: () => void;
}

const ContactModal : React.FC<ContactModalProps> = ({onClose}) => {
    const form = useRef<HTMLFormElement>(null);
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = () => {
        const sendEmailPromise = emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current!,
            import.meta.env.VITE_PUBLIC_KEY
        );

        toast.promise(
            sendEmailPromise,
            {
                loading: 'Sending message...',
                success: 'Message sent successfully!',
                error: 'Failed to send message!',
            }
        ).catch(() => {
            // handle error if needed
        })
        .finally(() => {
            onClose();
        });
    };
    return (
        <>
            <motion.div
                className="fixed inset-0 h-full w-full top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="relative rounded-lg w-1/2 min-h-10 bg-white text-gray-900 p-6"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                >
                    <button
                        type="button"
                        className="absolute top-3 right-3 text-gray-900"
                        onClick={onClose}
                        >
                        <IoClose size={24} />
                    </button>
                    <form 
                    ref={form}
                    onSubmit={handleSubmit(onSubmit)} 
                    className="flex flex-col gap-2 w-full mt-1">
                        <label htmlFor="name" className="text-black">Name:</label>
                        <input
                            type="text"
                            placeholder="Your name"
                            {...register("name", { required: "Name is required"})}
                            className="form-input block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            />
                        <label htmlFor="email" className="text-black">Email:</label>
                        <input
                            type="email"
                            placeholder="Your email"
                            {...register("email", { required: "Email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Invalid email address" } })}
                            className="form-input block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            />
                        {errors.email && <span className="text-red-500 text-sm">{"" + errors.email.message}</span>}
                        <label htmlFor="message" className="text-black">Message:</label>
                        <textarea
                            placeholder="Your message goes here"
                            {...register("message", { required: "Message is required" })}
                            className="form-input block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            />
                        {errors.message && <span className="text-red-500 text-sm">{""+errors.message.message}</span>}
                        <button
                            type="submit"
                            className="mt-2 px-4 py-2 bg-sky-600 text-white rounded-md"
                            >
                            Submit
                        </button>
                    </form>
                </motion.div>
            </motion.div>
        </>
    );
};

export default ContactModal;
