class EntryForm < Reform::Form

  properties(
    :name,
    :number,
    :email,
    :description,
    :validates => {:presence => true}
  )

end
