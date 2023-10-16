function OpenHours({open,close,day}) {
    return (
 <>    <tbody>
 <tr className="border-b dark:border-neutral-500  text-white">
   <td className="whitespace-nowrap px-6 py-4 font-medium">{day}</td>
   <td className="whitespace-nowrap px-6 py-4">{open}</td>
   <td className="whitespace-nowrap px-6 py-4">{close}</td>

 </tr>

</tbody>
</>
        

    )
}

export default OpenHours
