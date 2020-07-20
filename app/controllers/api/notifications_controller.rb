# frozen_string_literal: true

class Api::NotificationsController < ApplicationController
  def index
    @notifications = current_user.notifications.recent
  end

  def update
    @notification = current_user.notifications.find_by(id: params[:id])
    if @notification.update(read: true)
      head :ok
    end
  end
end
