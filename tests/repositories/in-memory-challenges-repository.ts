import { ChallengesRepository } from "../../src/application/repositories/ChallengesRepositoy";
import { Challenge } from "../../src/domain/entities/challenge";

export class InMemoryChallengesRepository implements ChallengesRepository {
  public items: Challenge[] = [];

  async findById(id: string): Promise<Challenge | null> {
    const challenge = this.items.find(challenge => challenge.id === id)

    if (!challenge) {
      return null;
    }

    return challenge;
  }
}