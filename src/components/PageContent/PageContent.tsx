import React from 'react';
import CountdownTimer from "@/components/CountdownTimer";
import AnswerForm from "@/components/AnswerForm";

const programDay = [
    {
        title: 'Свадебная церемония',
        time: '14:00',
        place: 'Минск Отдел ЗАГС Фрунзенского района, пр. Пушкина, 55',
        href: 'https://yandex.by/maps/-/CHCjn2mh'
    },
    {
        title: 'Праздничный ужин',
        time: '15:30',
        place: 'Ресторан "Venner" Минский район, Ждановичский с\\с, 83',
        href: 'https://yandex.by/maps/-/CHCj7I5I'
    },
    {
        title: 'Завершение вечера',
        time: '23:00',
    },
]
const PageContent = (
    {
        inviteId,
        guestTitle
    }: {
        guestTitle?: string
        inviteId: string
    }) => {
    const title = guestTitle || "Дорогие родные и друзья!";

    return (
        <div
            className="flex flex-col items-center pb-20 sm:p-20 bg-[#D0CABE] text-zinc-800"
        >
            <section className='pb-10 bg-[#BFC2BD] flex flex-col items-center'>
                <img src="/D_n_K.jpg" alt="no_image" className='scale-75'/>

                <header className='flex flex-col items-center text-yellow-900'>
                    <h1 className='text-[44px] sm:text-6xl font-allegro'>Дмитрий и Екатерина</h1>
                    <p className='text-2xl my-10'>июль |26|07|2025</p>
                </header>
                <p className='text-lg font-arial w-10/12 sm:w-3/6 my-10 text-center'>&#34;Самое главное и ценное в
                    жизни-семья! Сначала
                    в которой ты рождаешься, а потом, которую ты создаешь сам&#34;</p>
                <div className='flex flex-col items-center border-[1.5px] border-black w-10/12 sm:w-3/5 py-8'>
                    <h2 className="text-[52px] sm:text-6xl font-allegro text-center">{title}</h2>
                    <p className='my-10 w-3/4 text-justify'>Приглашаем разделить с нами один из самых важных дней в
                        жизни - нашу свадьбу!</p>
                </div>
            </section>

            <section className='flex flex-col items-center pt-7'>
                <h1 className='text-[52px] sm:text-6xl font-allegro'>Программа дня</h1>


                <div className='sm:pl-10 max-w-[85%] sm:max-w-full'>
                    {programDay.map(i => (
                        <div
                            className='grid grid-cols-[auto_1fr] sm:grid-cols-[auto_4fr] my-10 gap-x-2'
                            key={i.title}
                        >
                            <p className='font-allegro sm:font-arial text-3xl sm:row-span-2 self-center sm:pr-2'>{i.time}</p>
                            <p className='text-4xl font-allegro sm:ml-6'>{i.title}</p>
                            {i.place && (
                                <p className='flex items-center gap-3 mt-2 col-span-2 sm:col-auto text-zinc-800'>
                                    {i.place}
                                    {i.href && (
                                        <a href={i.href}>
                                            <img
                                                src="/link-icon.svg"
                                                className='size-4 cursor-pointer shadow-1'
                                            />
                                        </a>)}
                                </p>
                            )}
                        </div>
                    ))}

                </div>
            </section>
            <section className='flex flex-col items-center gap-5 w-10/12 sm:w-3/5 py-8'>
                <h2 className='text-[52px] sm:text-6xl font-allegro'>Анкета</h2>
                <AnswerForm invite_id={inviteId}/>
            </section>
            <section className='flex flex-col items-center gap-5 pt-7 mb-10'>
            <h2 className='text-[52px] sm:text-6xl font-allegro'>Контакты</h2>
                <p>Жених: <a href='tel:+375 (33) 309-33-31' className='text-zinc-600'>+375 (33) 309-33-31</a></p>
                <p>Невеста: <a href='tel:+375 (44) 599-78-58' className='text-zinc-600'>+375 (44) 599-78-58</a></p>

                <p>По всем вопросам обращайтесь к нам.</p>
            </section>
            <footer className='flex flex-col items-center mt-8 text-[44px] sm:text-6xl font-allegro my-[50px]'>
                <p>Дмитрий и Екатерина</p>
            </footer>
            <section className='flex flex-col items-center'>
                <h2 className="sm:text-lg mb-6 text-center max-w-[85%]">Будем счастливы видеть Вас на нашем свадебном
                    торжестве!</h2>
                <CountdownTimer expiryTimestamp={new Date('2025-07-26T14:00:00')}/>
            </section>
        </div>
    );
};

export default PageContent;
