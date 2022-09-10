const timeConvertor = (time: number) => {
  let calculatedTime = '00:00';

  if (time / 60 >= 1) {
    let hours: number | string = Math.floor(time / 3600);
    time = time - hours * 3600;               
    let minutes: number | string = Math.floor(time / 60);
    let seconds: number | string = Math.floor(time % 60);

    if (hours.toString().length < 2) hours = '0' + hours;
    if (minutes.toString().length < 2) minutes = '0' + minutes;
    if (seconds.toString().length < 2) seconds= '0' + seconds;

    calculatedTime = hours + ':' + minutes + ':' + seconds;          
  } else {
    let minutes: number | string = Math.floor(time / 60);
    let seconds: number | string = Math.floor(time % 60);

    if (minutes.toString().length < 2) minutes = '0' + minutes;
    if (seconds.toString().length < 2) seconds = '0' + seconds;
    
    calculatedTime = minutes + ':' + seconds;
  }

  return calculatedTime;
}

export default timeConvertor;
