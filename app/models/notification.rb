# frozen_string_literal: true

class Notification < ApplicationRecord
  belongs_to :service

  scope :recent, -> { order(created_at: :desc).limit(10) }

  def self.renew_service(service)
    Notification.create!(
      service: service,
      read: false,
      message: "「#{service.name}」が更新されました。\n次回の更新日は#{I18n.l service.next_renewed_on(1)}です。"
    )
  end
end
