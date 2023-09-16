import { DateTime, Linkable, LinkedId, LinkedType } from ".";
import { Forum } from "./forum";
import { UserBasic } from "./user";

export type TopicId = number;
export type TopicEventType = 'episode'
  | 'ongoing'
  | 'anons'
  | 'released'
  | 'SiteNews'
  | ''
  | null;
export type TopicType = 'Topic'
  | 'Topics::ClubUserTopic'
  | 'Topics::EntryTopic'
  | 'Topics::EntryTopics::AnimeTopic'
  | 'Topics::EntryTopics::ArticleTopic'
  | 'Topics::EntryTopics::CharacterTopic'
  | 'Topics::EntryTopics::ClubPageTopic'
  | 'Topics::EntryTopics::ClubTopic'
  | 'Topics::EntryTopics::CollectionTopic'
  | 'Topics::EntryTopics::ContestTopic'
  | 'Topics::EntryTopics::CosplayGalleryTopic'
  | 'Topics::EntryTopics::MangaTopic'
  | 'Topics::EntryTopics::PersonTopic'
  | 'Topics::EntryTopics::RanobeTopic'
  | 'Topics::EntryTopics::CritiqueTopic'
  | 'Topics::EntryTopics::ReviewTopic'
  | 'Topics::NewsTopic'
  | 'Topics::NewsTopics::ContestStatusTopic';

export interface Topic<T extends Linkable = Linkable> {
  id: TopicId,
  topic_title: string,
  body: string,
  html_body: string,
  html_footer: string,
  created_at: DateTime,
  comments_count: number,
  forum: Forum,
  user: UserBasic,
  type: TopicType,
  linked_id: LinkedId,
  linked_type: LinkedType,
  linked: T | null,
  viewed: boolean,
  last_comment_viewed: boolean | null,
  event: TopicEventType,
  episode: number | null,
}

export type TopicBasic = Pick<Topic, 'id' | 'linked' | 'event' | 'episode' | 'created_at'> & {
  url: string
};
