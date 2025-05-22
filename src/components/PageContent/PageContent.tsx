import React from 'react';
import CountdownTimer from "@/components/CountdownTimer";

const programDay = [
    {
        title: 'Свадебная церемония',
        time: '14:00',
        place: 'Минск Отдел ЗАГС Фрунзенского района, пр. Пушкина, 55'
    },
    {
        title: 'Праздничный ужин',
        time: '15:30',
        place: 'Ресторан "Venner" Минский район, Ждановичский с\\с, 83'
    },
    {
        title: 'Завершение вечера',
        time: '23:00',
    },
]
const PageContent = ({guestTitle}: { guestTitle?: string }) => {
    const title = guestTitle || "Дорогие родные и друзья!";

    return (
        <div
            className="flex flex-col items-center pb-20 sm:p-20 bg-[#D0CABE] text-zinc-800"
        >
            <section className='pt-[300px] pb-10 bg-[#BFC2BD] flex flex-col items-center'>
                <header className='flex flex-col items-center text-yellow-900'>
                    <h1 className='text-6xl font-allegro'>Дмитрий и Екатерина</h1>
                    <p className='text-2xl my-10'>июль |26|07|2025</p>
                </header>
                <p className='text-lg font-arial w-3/6 my-10 text-center'>"Самое главное и ценное в жизни-семья! Сначала
                    в которой ты рождаешься, а потом, которую ты создаешь сам"</p>
                <div className='flex flex-col items-center border-[1.5px] border-black w-3/5 py-8'>
                    <h2 className="text-6xl font-allegro text-center">{title}</h2>
                    <p className='my-10 w-3/4 text-justify'>Приглашаем разделить с нами один из самых важных дней в жизни - нашу свадьбу!</p>
                </div>
            </section>

            <section className='flex flex-col items-center pt-7'>
                <h1 className='text-6xl font-allegro'>Программа дня</h1>


                <div className='pl-10'>
                    {programDay.map(i => (
                        <div
                            className='grid grid-cols-[auto_4fr] my-10 gap-x-2'
                            key={i.title}
                        >
                            <p className='text-3xl row-span-2 self-center pr-2'>{i.time}</p>
                            <p className='ml-6 text-4xl font-allegro'>{i.title}</p>
                            {i.place && <p className='mt-2'>{i.place}</p>}
                        </div>
                    ))}

                </div>
            </section>
            <section className='flex flex-col items-center gap-5 pt-7 mb-10'>
                <h2 className='text-6xl font-allegro'>Контакты</h2>
                <p>Жених: +375 (33) 309-33-31</p>
                <p>Невеста: +375 (44) 599-78-58</p>

                <p>По всем вопросам обращайтесь к нам.</p>
            </section>
            <footer className='flex flex-col items-center mt-8 text-6xl font-allegro my-[50px]'>
                <p>Дмитрий и Екатерина</p>
            </footer>
            <section className='flex flex-col items-center'>
                <h2 className="text-lg mb-6">Будем счастливы видеть Вас на нашем свадебном торжестве!</h2>
                <CountdownTimer expiryTimestamp={new Date('2025-07-26T00:00:00')}/>
            </section>
        </div>
    );
};

export default PageContent;
