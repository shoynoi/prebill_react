# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: "info@prebill.me"
  layout "mailer"
end
