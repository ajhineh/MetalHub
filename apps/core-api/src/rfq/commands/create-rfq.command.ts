export class CreateRfqCommand {
  constructor(
    public readonly buyerId: string,
    public readonly title: string,
    public readonly description: string,
  ) {}
}
