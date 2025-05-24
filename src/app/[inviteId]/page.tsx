import { guestIds, GuestsTitleMap } from "@/state";
import PageContent from "@/components/PageContent";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return guestIds.map((id) => ({ inviteId: id }));
}

export default function InvitePage({ params }: { params: { inviteId: string } }) {
    const { inviteId } = params;

    // Если параметр невалидный — вызываем 404
    // if (!guestIds.includes(inviteId)) {
    //     notFound(); // ⛔️ важная строка
    // }

    const title = GuestsTitleMap[inviteId as keyof typeof GuestsTitleMap];
    return <PageContent guestTitle={title} />;
}
