// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// // import Form from "react-bootstrap/Form";
// import { ko } from "date-fns/esm/locale";

// const schedule = ({
//   pickupDate,
//   setPickupDate,
//   tomorrow,
//   pickupTime,
//   setPickupTime,
//   setIsClicked,
// }) => {
//   const [isDisable, setIsDisable] = useState(true);
//   const handleDateChange = (date) => {
//     setPickupDate(date);
//     let tomorrowDate = tomorrow.getTime();
//     let importDate = date.getTime();
//     setIsDisable(true);
//     if (importDate > tomorrowDate) {
//       setIsDisable(false);
//     }
//   };
//   const handlePickupTimeClick = (time) => {
//     setPickupTime(time);
//     setTimeout(() => {
//       setIsClicked("");
//     }, 1000);
//   };
//   return (
//     <div>
//       <div>
//         <h1>픽업 날짜를 선택하세요</h1>
//         <div>기사님이 준비된 옷을 픽업 할 날짜를 체크해주세요.</div>
//         <div>
//           <DatePicker
//             selected={pickupDate}
//             onChange={handleDateChange}
//             locale={ko} // 한글로 변경
//             dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
//             showPopperArrow={false} // 화살표 변경
//             minDate={tomorrow} // 오늘 날짜 전은 선택 못하게
//             inline
//           />
//         </div>
//       </div>
//       <div>
//         <h1>픽업 시간을 선택하세요</h1>
//         <div>기사님이 픽업 가능한 시간을 모두 체크해주세요.</div>
//         {/* <ButtonsWrapper>
//           <Buttons>
//             <Button
//               onClick={() => handlePickupTimeClick("01")}
//               disabled={isDisable}
//               className={
//                 (isDisable && "disable") || (pickupTime === "01" && "active")
//               }
//             >
//               06:00 AM - 11:00 AM
//             </Button>
//             <Button
//               onClick={() => handlePickupTimeClick("02")}
//               disabled={isDisable}
//               className={
//                 (isDisable && "disable") || (pickupTime === "02" && "active")
//               }
//             >
//               10:00 AM - 14:00 PM
//             </Button>
//           </Buttons>
//           <Buttons>
//             <Button
//               className={pickupTime === "03" && "active"}
//               onClick={() => handlePickupTimeClick("03")}
//             >
//               14:00 PM - 19:00 PM
//             </Button>
//             <Button
//               className={pickupTime === "04" && "active"}
//               onClick={() => handlePickupTimeClick("04")}
//             >
//               18:00 PM - 22:00 PM
//             </Button>
//           </Buttons>
//         </ButtonsWrapper> */}
//       </div>
//     </div>
//   );
// };

// export default schedule;
