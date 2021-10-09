import React, {useState} from 'react';
import { parse, formatDistanceStrict  } from 'date-fns';
import { ru } from 'date-fns/locale'


function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

function updateDateTime(Component) {
  return function Wrapper(props) {
    const dateLoading = parse(props.date, 'yyyy-MM-dd HH:mm:ss', new Date())
    const date = formatDistanceStrict(new Date(), dateLoading, {locale: ru}) + ' назад';
    return (<Component {...props} date={date}/>)
  }
}

const DateTimePretty = updateDateTime(DateTime);

function Video(props) {
    return (
        <div className="video">
          {/* eslint-disable-next-line */}
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video key={item.url} url={item.url} date={item.date} />);
}

export default function App() {
    /* eslint-disable-next-line */
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2020-07-31 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2021-07-31 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2021-09-30 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2021-10-09 15:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2021-10-09 15:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}