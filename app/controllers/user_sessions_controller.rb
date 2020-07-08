# frozen_string_literal: true

class UserSessionsController < ApplicationController
  def create
    @user = login(params[:email], params[:password])
    if @user
      flash.notice = "ログインしました。"
      head :ok
    else
      flash.alert = "ユーザー名かパスワードが正しくありません。"
      head :unauthorized
    end
  end

  def destroy
    logout
    flash.notice = "ログアウトしました。"
    head :ok
  end
end
