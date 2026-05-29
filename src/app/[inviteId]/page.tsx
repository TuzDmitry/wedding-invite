import { guestIds, GuestsTitleMap } from "@/state";
import PageContent from "@/components/PageContent";

// 🌟 Говорим Next.js: "Если ID нет в generateStaticParams, сразу отдавай 404"
export const dynamicParams = false;

export async function generateStaticParams() {
    return guestIds.map((id) => ({inviteId: id}));
}

export default function InvitePage({params}: { params: { inviteId: string } }) {
    const {inviteId} = params;


    const title = GuestsTitleMap[inviteId as keyof typeof GuestsTitleMap];

    return (
        <PageContent
            guestTitle={title}
            inviteId={inviteId}
        />
    );
}
