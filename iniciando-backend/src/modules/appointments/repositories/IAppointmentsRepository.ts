import Appointment from '@modules/appointments/infra/typeorm/entities/appointments';

export default interface IAppointmentsRepository {
  findByDate(date: Date): Promise<Appointment | undefined>;
}
