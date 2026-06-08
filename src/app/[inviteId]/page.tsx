import { guestIds, GuestsTitleMap } from "@/state";
import PageContent from "@/components/PageContent";

// 🌟 Говорим Next.js: "Если ID нет в generateStaticParams, сразу отдавай 404"
export const dynamicParams = false;

export async function generateStaticParams() {
    return guestIds.map((id) => ({inviteId: id}));
}

export async function generateMetadata({ params }: { params: { inviteId: string } }){
    const title = GuestsTitleMap[params.inviteId as keyof typeof GuestsTitleMap];

    return {
        title: title,
        description: `Приглашение на свадьбу для ${title}`,
        keywords: ['свадьба', 'wedding', 'приглашение', 'RSVP', 'гости', 'Дмитрий и Екатерина'],
        openGraph: {
            title: `${title}! Приглашаем на свадьбу Дмитрия и Екатерины!`,
            description: 'Пожалуйста, подтвердите свое присутствие и оставьте комментарий.',
            type: 'article'
        }
    }
}

export default function InvitePage({ params }: { params: { inviteId: string } }) {
    const { inviteId } = params;

    const title = GuestsTitleMap[inviteId as keyof typeof GuestsTitleMap];

    return (
        <PageContent
            guestTitle={title}
            inviteId={inviteId}
        />
    );
}
