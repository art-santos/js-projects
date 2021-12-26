let hourRate: number;
let servicePrice: number;
let salary: number;

const calculateDailyValue = (salary: number) => {
    salary = salary;
    return ((salary*12)/365);
}

const calculateHourRate = (salary: number) => {
    return (calculateDailyValue(salary) / 24);
}

const setServicePrice = (servicePrice: number) => {
    servicePrice = servicePrice;
    return servicePrice;
}

const salaryParityInTimes = (salary: number) => {
    return salary/100;
}

const calculateSalaryParity = (salary: number, servicePrice: number): {percent: string, times:number} => {
    const salaryProportion = (calculateHourRate(salary) / setServicePrice(servicePrice));
    const salaryProportionPercent = Math.round(salaryProportion * 10000);
    const salaryProportionPercentRounded = salaryProportionPercent/100;
    const salaryParityProportion = salaryParityInTimes(salaryProportionPercentRounded);
    return {percent: salaryProportionPercentRounded+'%', times: salaryParityProportion};
}

const howManyHoursDoYouNeedToWorkToGetThisMoney = (callback: any) => {
    const str = 1/callback.times;
    const round = Math.round((str*3600*100));
    const seconds = Math.floor(round/100);
    const minutes = Math.floor(seconds/60);
    const hours = Math.floor(minutes/60);
    return {seconds: seconds%60, minutes: minutes%60, hours: hours};
}


console.log(calculateSalaryParity(7200, 20));
console.log(howManyHoursDoYouNeedToWorkToGetThisMoney(calculateSalaryParity(7200, 20)));