export const metadata = {
    title: "О проекте",
    description: "Информация о проекте управления приглашениями на свадьбу",
};

export default async function About() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">О проекте</h1>
            <p className="mb-2">
                Этот проект был создан для управления приглашениями на свадьбу. Он позволяет гостям RSVP и оставлять комментарии, а организаторам - легко отслеживать ответы и управлять списком гостей.
            </p>
            <p className="mb-2">
                Технологии, использованные в проекте:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Next.js 14 с App Router</li>
                <li>Supabase для хранения данных</li>
                <li>Google reCAPTCHA для защиты от спама</li>
                <li>TypeScript для типизации</li>
                <li>Tailwind CSS для стилизации</li>
            </ul>
            <p>
                Если у вас есть вопросы или предложения, пожалуйста, свяжитесь с нами!
            </p>
        </div>
    );
}
