function OpenHours({ open, close, day }) {

  return (
    <div className="table-responsive m-4 justify-center">
      <table className="w-full">
        <tbody>
          <tr className="border-b dark:border-neutral-500  text-black">
            <td className="whitespace-nowrap px-4 md:px-6 py-3 md:py-4 font-medium">
              {day}
            </td>
            <td className="whitespace-nowrap px-4 md:px-6 py-3 md:py-4">{open}</td>
            <td className="whitespace-nowrap px-4 md:px-6 py-3 md:py-4">{close}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OpenHours;
