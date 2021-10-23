import Form from '../components/Form'
import PageWithHeader from '../components/PageWithHeader'

export default function Home() {
  return (
    <PageWithHeader>
      <div className='px-10'>
        <h1 className="text-3xl font-extrabold pt-6 pb-2">
          Good Day Vending
        </h1>
        <p>
          We’re sorry to hear something went wrong. Help us fix it by filing a report.
        </p>
        <Form />
      </div>
    </PageWithHeader>
  )
}
