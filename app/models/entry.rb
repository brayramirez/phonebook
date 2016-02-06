# == Schema Information
#
# Table name: entries
#
#  id          :integer          not null, primary key
#  name        :string
#  number      :string
#  email       :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Entry < ActiveRecord::Base

end
